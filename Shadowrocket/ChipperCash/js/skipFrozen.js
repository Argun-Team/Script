// 假设 isFrozen为false跳过人脸认证
$done({
    body: JSON.stringify({
        "isFrozen": false
    })
});