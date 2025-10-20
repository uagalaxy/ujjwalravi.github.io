// This is Node.js/Vercel Serverless Function syntax
// It uses the standard 'req' (request) and 'res' (response) objects.

module.exports = (req, res) => {
  // Vercel sets the client's IP in the x-forwarded-for header.
  const forwarded = req.headers['x-forwarded-for'];

  // The client IP is the first value in the comma-separated list.
  // We use a fallback (req.socket.remoteAddress) just in case.
  const clientIp = forwarded 
    ? forwarded.split(',')[0].trim() 
    : req.socket.remoteAddress;

  // Send the IP address back to the client as JSON
  res.status(200).json({ 
    ip: clientIp 
  });
};
