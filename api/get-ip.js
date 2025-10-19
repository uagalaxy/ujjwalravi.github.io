// api/get-ip.js

module.exports = (req, res) => {
    // 1. IP Address (from Vercel's primary header)
    const forwarded = req.headers['x-forwarded-for'];
    const clientIp = forwarded 
        ? forwarded.split(',')[0].trim() 
        : 'IP_Not_Available';

    // 2. Vercel-Specific Geolocation Headers
    const country = req.headers['x-vercel-ip-country'] || 'N/A';
    const city = req.headers['x-vercel-ip-city'] || 'N/A';
    
    // 3. Browser/Device Information Headers
    const userAgent = req.headers['user-agent'] || 'N/A';
    const acceptLanguage = req.headers['accept-language'] || 'N/A';

    // Return all collected data in a single JSON object
    res.status(200).json({ 
        ip: clientIp,
        country: country,
        city: city,
        user_agent: userAgent,
        language: acceptLanguage,
    });
};
