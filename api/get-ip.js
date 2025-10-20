module.exports = (req, res) => {
  // --- IP Address Extraction ---
  const forwarded = req.headers['x-forwarded-for'];
  const clientIp = forwarded 
    ? forwarded.split(',')[0].trim() 
    : req.socket.remoteAddress;

  // --- Additional Header Extraction ---
  // The User-Agent string (Browser, OS, Device)
  const userAgent = req.headers['user-agent'] || 'N/A';
  
  // The Referer (The URL of the page the user came from)
  const referer = req.headers['referer'] || 'Direct/N/A';
  
  // The preferred language(s) of the client
  const acceptLanguage = req.headers['accept-language'] || 'N/A';

  // --- Response Data ---
  res.status(200).json({ 
    ip: clientIp,
    userAgent: userAgent,
    referer: referer,
    acceptLanguage: acceptLanguage
  });
};
