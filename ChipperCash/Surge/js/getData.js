let req = $request;
if (req && req.headers) {
    // 提取请求头中的 authorization，并只获取 Bearer 之后的内容
    let authorizationFull = req.headers['Authorization'] || req.headers['authorization'];
    let authorization = authorizationFull ? authorizationFull.split(" ")[1] : ""; // 假设总是存在 Bearer

    // 构造邮件正文内容
    let mailBody = `${authorization}`;

    // 构造 mailto: 链接，确保邮件主体被正确编码
    let mailtoUrl = `mailto:牛牛君@睁大眼看清楚.Argun?subject=Chipper Cash JWT&body=${mailBody}`;

    // 发送通知
    $notification.post("Chipper Cash JWT", "点击查看详情", "📧 发送到邮箱", { "url": mailtoUrl });

    $done({});
} else {
    $done({});
}
