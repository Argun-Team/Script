let req = $request;
if (req && req.headers) {
    // 提取请求头中的 authorization 和 chipper-device-id
    let authorization = req.headers['authorization'];
    let deviceId = req.headers['chipper-device-id'];

    // 构造邮件正文内容
    let mailBody = `Authorization: ${authorization}\nChipper-Device-Id: ${deviceId}`;

    // 构造 mailto: 链接
    let mailtoUrl = `mailto:your-email@example.com?subject=ChipperCash Authorization&body=${encodeURIComponent(mailBody)}`;

    // 发送通知
    $notification.post("ChipperCash Authorization", "点击查看详情", "📧 发送到邮箱", { "url": mailtoUrl });

    $done({});
} else {
    $done({});
}
