const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxacode.createQRCode({
        path: event.path,
        width: 430
      })

    const upload =await cloud.uploadFile({
      cloudPath:'xiace/'+event.name+'.png',
      fileContent:result.buffer
    })
    return upload
  } catch (err) {
    return err
  }
}