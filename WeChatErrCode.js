/**
 * 微信接口返回状态码
 */


errCode = {

  '-1': '微信系统错误，请注意备份内容后重试',
  '-2': '参数错误',
  '-5': '服务错误，请注意备份内容后重试',
  '-13': '上传文件过于频繁，请稍后再试',
  '-99': '内容超出字数，请调整',
  '-206': '目前，服务负荷过大，请稍后重试',
  '-2000': '登录态超时，请重新登录',

  0: '请求成功',

  10703: '对方关闭了接收消息',
  10701: '用户已被加入黑名单，无法向其发送消息',
  10705: '该素材已被删除',
  10801: '标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑',
  10802: '作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑',
  10803: '敏感链接，请重新添加',
  10804: '摘要或正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑',
  10806: '正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑',
  10807: '内容不能违反公众平台协议、相关法律法规和政策，请重新编辑',


  15801: '你所编辑的图文消息可能含有违反微信公众平台平台协议、相关法律法规和政策的内容',

  153007: '很抱歉，原创声明不成功|你的文章内容未达到声明原创的要求，满足以下任一条件可发起声明：' +
    ' 1、文章文字大于300字; 2、文章文字小于300字，视频均为你已成功声明原创的视频; 3、文章文字小于300字，无视频，图片（包括封面图）均为你已成功声明原创的图片',
  153008: '很抱歉，原创声明不成功|你的文章内容少于300字，未达到申请原创内容声明的字数要求。',
  153012: '请设置转载类型',

  1530503: '请勿添加其他公众号的主页链接',
  1530504: '请勿添加其他公众号的主页链接',
  1530510: '链接已失效，请在手机端重新复制链接',

  200002: '参数错误',
  200003: '登录失效',
  200004: '请求页面的域名没有授权。',
  200005: '请求方式错误，请确认请求方式后重试。',
  200006: '表单名称验证出错，请核对表单名称后重试。',
  200007: '对不起，你没有权限访问目标请求。',

  200010: '上传文件过大',

  200018: '页面停留时间过久，请刷新页面后重试！',
  200020: '无法解析该图片，请使用另一图片或截图另存',
  200013: '操作过于频繁，请稍后再试',
  200022: '上传音频文件不能超过60秒',
  200039: '上传图片高度（像素）与宽度（像素）的乘积不能超过600万',
  200041: '此素材有文章存在违规，无法编辑',
  200042: '图文中包含的小程序卡片不能多于20个',
  200043: '图文中包含没有关联的小程序，请删除后再同步',

  220001: '"素材管理"中的存储数量已达到上限，请删除后再操作',
  220002: '你的图片库已达到存储上限，请进行清理',


  320001: '该素材已被删除，无法保存',

  40001: '获取access_token时AppSecret错误，或者access_token无效。请开发者认真比对AppSecret的正确性，或查看是否正在为恰当的公众号调用接口',
  40002: '不合法的凭证类型',
  40003: '不合法的OpenID，请开发者确认OpenID（该用户）是否已关注公众号，或是否是其他公众号的OpenID',
  40004: '不合法的媒体文件类型',
  40005: '不合法的文件类型',
  40006: '不合法的文件大小',
  40007: '不合法的媒体文件id',
  40008: '不合法的消息类型',
  40009: '不合法的图片文件大小',
  40010: '不合法的语音文件大小',
  40011: '不合法的视频文件大小',
  40012: '不合法的缩略图文件大小',
  40013: '不合法的AppID，请开发者检查AppID的正确性，避免异常字符，注意大小写',
  40014: '不合法的access_token，请开发者认真比对access_token的有效性（如是否过期），或查看是否正在为恰当的公众号调用接口',
  40015: '不合法的菜单类型',
  40016: '不合法的按钮个数',
  40017: '不合法的按钮个数',
  40018: '不合法的按钮名字长度',
  40019: '不合法的按钮KEY长度',
  40020: '不合法的按钮URL长度',
  40021: '不合法的菜单版本号',
  40022: '不合法的子菜单级数',
  40023: '不合法的子菜单按钮个数',
  40024: '不合法的子菜单按钮类型',
  40025: '不合法的子菜单按钮名字长度',
  40026: '不合法的子菜单按钮KEY长度',
  40027: '不合法的子菜单按钮URL长度',
  40028: '不合法的自定义菜单使用用户',
  40029: '不合法的oauth_code, 登录多次导致code重复/appid和secret对应不上，不是同一个小程序',
  40030: '不合法的refresh_token',
  40031: '不合法的openid列表',
  40032: '不合法的openid列表长度',
  40033: '不合法的请求字符，不能包含**x格式的字符',
  40035: '不合法的参数',
  40038: '不合法的请求格式',
  40039: '不合法的URL长度',
  40050: '不合法的分组id',
  40051: '分组名字不合法',
  40060: '删除单篇图文时，指定的 article_idx 不合法',
  40117: '分组名字不合法',
  40118: 'media_id大小不合法',
  40119: 'button类型错误',
  40120: 'button类型错误',
  40121: '不合法的media_id类型',
  40132: '微信号不合法',
  40137: '不支持的图片格式',
  40155: '请勿添加其他公众号的主页链接',
  41001: '缺少access_token参数',
  41002: '缺少appid参数',
  41003: '缺少refresh_token参数',
  41004: '缺少secret参数',
  41005: '缺少多媒体文件数据',
  41006: '缺少media_id参数',
  41007: '缺少子菜单数据',
  41008: '缺少oauth code',
  41009: '缺少openid',
  42001: 'access_token超时，请检查access_token的有效期，请参考基础支持-获取access_token中，对access_token的详细机制说明',
  42002: 'refresh_token超时',
  42003: 'oauth_code超时',
  42007: '用户修改微信密码，accesstoken和refreshtoken失效，需要重新授权',
  43001: '需要GET请求',
  43002: '需要POST请求',
  43003: '需要HTTPS请求',
  43004: '需要接收者关注',
  43005: '需要好友关系',
  43019: '需要将接收者从黑名单中移除',
  44001: '多媒体文件为空',
  44002: 'POST的数据包为空',
  44003: '图文消息内容为空',
  44004: '文本消息内容为空',
  45001: '多媒体文件大小超过限制',
  45002: '消息内容超过限制',
  45003: '标题字段超过限制',
  45004: '描述字段超过限制',
  45005: '链接字段超过限制',
  45006: '图片链接字段超过限制',
  45007: '语音播放时间超过限制',
  45008: '图文消息超过限制',
  45009: '接口调用超过限制',
  45010: '创建菜单个数超过限制',
  45011: 'API调用太频繁，请稍候再试',
  45015: '回复时间超过限制',
  45016: '系统分组，不允许修改',
  45017: '分组名字过长',
  45018: '分组数量超过上限',
  45047: '客服接口下行条数超过上限',
  46001: '不存在媒体数据',
  46002: '不存在的菜单版本',
  46003: '不存在的菜单数据',
  46004: '不存在的用户',
  47001: '解析JSON/XML内容错误',
  48001: 'api功能未授权，请确认公众号已获得该接口，可以在公众平台官网-开发者中心页中查看接口权限',
  48002: '粉丝拒收消息（粉丝在公众号选项中，关闭了“接收消息”）',
  48004: 'api接口被封禁，请登录mp.weixin.qq.com查看详情',
  48005: 'api禁止删除被自动回复和自定义菜单引用的素材',
  48006: 'api禁止清零调用次数，因为清零次数达到上限',



  50001: '用户未授权该api',
  50002: '用户受限，可能是违规后接口被封禁',


  61451: '参数错误',
  61452: '无效客服账号',
  61453: '客服帐号已存在',
  61454: '客服帐号名长度超过限制(仅允许10个英文字符，不包括@及 @后的公众号的微信号)',
  61455: '客服帐号名包含非法字符(仅允许英文 + 数字)',
  61456: '客服帐号个数超过限制(10个客服账号)',
  61457: '无效头像文件类型',
  61450: '系统错误',
  61500: '日期格式错误',

  62752: '可能含有具备安全风险的链接，请检查',

  64501: '你输入的帐号不存在，请重新输入',
  64502: '你输入的微信号不存在，请重新输入',
  64503: '1.接收预览消息的微信尚未关注公众号，请先扫码关注<br /> 2.如果已经关注公众号，请查看微信的隐私设置（在手机微信的“我->设置->隐私->添加我的方式”中），并开启“可通过以下方式找到我”的“手机号”、“微信号”、“QQ号”，否则可能接收不到预览消息',
  64504: '保存图文消息发送错误，请稍后再试',
  64505: '发送预览失败，请稍后再试',
  64506: '保存失败,链接不合法',
  64507: '内容不能包含链接，请调整',
  64508: '查看原文链接可能具备安全风险，请检查',
  64509: '内容最多添加3个小视频、腾讯视频或微视频，请调整',
  64510: '内容不能包含语音，请调整',
  64511: '内容不能包多个语音，请调整',
  64512: '文章中语音错误,请使用语音添加按钮重新添加',
  64513: '请从正文中选择封面，再尝试保存',

  64515: '当前素材非最新内容',
  64516: '文章中可能存在其他公众号的视频内容，请先删除',
  64518: '保存失败，不允许包含多个投票',
  64519: '保存失败，包含了不属于该公众号的投票',
  64520: '保存失败，包含了未发布的投票',

  64550: '请勿插入不合法的已群发的图文消息链接',
  64551: '请检查图文消息中的微视链接后重试',
  64552: '原文链接错误',
  64553: '请不要在图文消息中插入超过5张卡券。请删减卡券后重试',
  64554: '在当前情况下不允许在图文消息中插入卡券，请删除卡券后重试',
  64555: '请检查图文消息卡片跳转的链接后重试',
  64556: '卡券不属于该公众号，请删除后重试',
  64557: '卡券无效，请删除后重试',
  64558: '请勿插入图文消息临时链接，链接会在短期失效',
  64559: '请勿插入未群发的图文链接',
  64560: '请勿插入历史图文消息页链接',
  64561: '请勿插入mp.weixin.qq.com域名下的非图文消息链接',
  64562: '请勿插入非mp.weixin.qq.com域名的链接',

  64601: '一篇文只能插入一个广告卡片',
  64602: '尚未开通文中广告位，但文章中有广告',
  64603: '文中广告前不足300字',

  64605: '文中不能同时插入文中广告和互选广告',

  64702: '标题超出64字长度限制',
  64703: '摘要超出120字长度限制',
  64704: '推荐语超出140字长度限制',


  65101: '图文模版数量已达到上限，请删除后再操作',

  65301: '不存在此menuid对应的个性化菜单',
  65302: '没有相应的用户',
  65303: '没有默认菜单，不能创建个性化菜单',
  65304: 'MatchRule信息为空',
  65305: '个性化菜单数量受限',
  65306: '不支持个性化菜单的帐号',
  65307: '个性化菜单信息为空',
  65308: '包含没有响应类型的button',
  65309: '个性化菜单开关处于关闭状态',
  65310: '填写了省份或城市信息，国家信息不能为空',
  65311: '填写了城市信息，省份信息不能为空',
  65312: '不合法的国家信息',
  65313: '不合法的省份信息',
  65314: '不合法的城市信息',
  65316: '该公众号的菜单设置了过多的域名外跳（最多跳转到3个域名的链接）',
  65317: '不合法的URL',


  9001001: 'POST数据参数不合法',
  9001002: '远端服务不可用',
  9001003: 'Ticket不合法',
  9001004: '获取摇周边用户信息失败',
  9001005: '获取商户信息失败',
  9001006: '获取OpenID失败',
  9001007: '上传文件缺失',
  9001008: '上传素材的文件类型不合法',
  9001009: '上传素材的文件尺寸不合法',
  9001010: '上传失败',
  9001020: '帐号不合法',
  9001021: '已有设备激活率低于50 %，不能新增设备',
  9001022: '设备申请数不合法，必须为大于0的数字',
  9001023: '已存在审核中的设备ID申请',
  9001024: '一次查询设备ID数量不能超过50',
  9001025: '设备ID不合法',
  9001026: '页面ID不合法',
  9001027: '页面参数不合法',
  9001028: '一次删除页面ID数量不能超过10',
  9001029: '页面已应用在设备中，请先解除应用关系再删除',
  9001030: '一次查询页面ID数量不能超过50',
  9001031: '时间区间不合法',
  9001032: '保存设备与页面的绑定关系参数错误',
  9001033: '门店ID不合法',
  9001034: '设备备注信息过长',
  9001035: '设备申请参数不合法',
  9001036: '查询起始值begin不合法'
}
