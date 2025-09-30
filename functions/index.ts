// Placeholder Firebase Function HTTP handler for Genkit-like flows.
// Update to call actual Genkit SDK in production.

import { onRequest } from 'firebase-functions/v2/https';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/genkit/:flowName', async (req, res) => {
  const flowName = req.params.flowName;
  const data = req.body?.data || {};
  console.log('Genkit flow called:', flowName, data);

  if (flowName === 'applicantExpenseFlow') {
    if (data.role && data.role !== 'BranchUser') {
      return res.status(403).json({ error: 'You do not have permission to manage applicants/expenses.' });
    }
    return res.json({ response: `ApplicantExpenseFlow: guidance for ${data.applicantName || 'unknown'} -> ${data.task}` });
  }

  if (flowName === 'fundRequestFlow') {
    if (data.role === 'BranchUser' && /approve/i.test(data.query || '')) {
      return res.status(403).json({ error: 'Branch users cannot approve fund requests.' });
    }
    if (data.role === 'HeadOfficeAccounting' && /create/i.test(data.query || '')) {
      return res.status(403).json({ error: 'Head Office cannot create fund requests.' });
    }
    return res.json({ response: `FundRequestFlow: role=${data.role} type=${data.requestType} query=${data.query}` });
  }

  if (flowName === 'auditLogFlow') {
    if (!['Administrator','President'].includes(data.role)) {
      return res.status(403).json({ error: 'You do not have permission to access audit logs.' });
    }
    return res.json({ explanation: `AuditLogFlow explanation for action: ${data.action}` });
  }

  return res.json({ response: `modernCRMFlow echo: ${JSON.stringify(data)}` });
});

export const api = onRequest({ region: 'us-central1' }, app);
