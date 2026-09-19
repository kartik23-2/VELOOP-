import FraudEvent from '../models/FraudEvent.js';
import AuditLog from '../models/AuditLog.js';

export const fraudMiddleware = async (req, res, next) => {
  try {
    const deviceHash = req.headers['x-device-hash'] || 'dev-browser-hash-10025';
    const clientIp = req.ip || req.connection.remoteAddress || '127.0.0.1';
    
    // Evaluate risk signals
    let riskScore = 0;
    const signals = [];

    if (!deviceHash || deviceHash.length < 5) {
      riskScore += 30;
      signals.push('MISSING_DEVICE_HASH');
    }

    if (req.headers['x-simulated-fraud'] === 'true') {
      riskScore += 85;
      signals.push('SIMULATED_SUSPICIOUS_BEHAVIOR');
    }

    req.deviceHash = deviceHash;
    req.riskScore = riskScore;

    if (riskScore >= 80) {
      await FraudEvent.create({
        userId: req.user?._id,
        giveawayId: req.params.id || req.body.giveawayId,
        deviceHash,
        ipAddress: clientIp,
        riskScore,
        reason: 'High risk score detected by automated anti-fraud layer',
        signals,
        action: 'BLOCKED'
      });

      await AuditLog.create({
        userId: req.user?._id,
        action: 'FRAUD_FLAGGED',
        giveawayId: req.params.id || req.body.giveawayId,
        result: 'BLOCKED',
        ip: clientIp,
        userAgent: req.headers['user-agent']
      });

      return res.status(403).json({
        error: 'SUSPICIOUS_ACTIVITY',
        message: 'Participation couldn\'t be completed. We couldn\'t verify this participation request.'
      });
    }

    next();
  } catch (err) {
    next();
  }
};
