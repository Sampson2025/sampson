# 🚀 Chinese GoGo 网站 - 5分钟快速部署指南

## 最快方式：Vercel 一键部署 (推荐)

### 第1步：准备 GitHub 账号 (2分钟)
1. 访问 https://github.com
2. 注册新账号（如果还没有）
3. 创建新仓库，命名为 `chinese-gogo-website`

### 第2步：上传项目文件 (2分钟)
在你新建的 GitHub 仓库中，创建以下文件结构：

```
chinese-gogo-website/
├── package.json
├── page.js
└── DEPLOYMENT_GUIDE.md
```

**上传步骤：**
1. 点击 "Add file" → "Create new file"
2. 创建文件夹结构（GitHub 会自动创建）
3. 将内容粘贴到相应文件

### 第3步：部署到 Vercel (1分钟)
1. 访问 https://vercel.com
2. 点击 "Sign Up" → 选择 "Continue with GitHub"
3. 授权连接到你的 GitHub
4. 点击 "New Project"
5. 选择你刚创建的 `chinese-gogo-website` 仓库
6. 点击 "Deploy"

**完成！** 你的网站现在在线了！

Vercel 会给你一个免费的 URL，格式如：
```
https://chinese-gogo-website.vercel.app
```

---

## 绑定你的域名 (chinesegogo.com)

### 步骤 1: 购买域名
- 访问 https://namecheap.com 或 https://godaddy.com
- 搜索 `chinesegogo.com`
- 购买（通常 $12-15/年）

### 步骤 2: 在 Vercel 中添加域名
1. 打开你的 Vercel 项目
2. 点击 "Settings" → "Domains"
3. 点击 "Add Domain"
4. 输入 `chinesegogo.com`
5. 按照 Vercel 提示修改 DNS 记录（在你的域名提供商网站上）

### 步骤 3: 等待 DNS 生效
- 通常需要 1-24 小时
- 可以用 https://dnschecker.org 检查

---

## 之后如何修改内容？

### 方式 1: 在线编辑 (推荐新手)
1. 打开你的 GitHub 仓库
2. 点击要编辑的文件
3. 点击铅笔图标 "Edit"
4. 修改内容
5. 点击 "Commit changes"
6. Vercel 自动部署（2-3分钟）

### 方式 2: 本地编辑 (推荐开发者)
```bash
# 克隆仓库
git clone https://github.com/你的用户名/chinese-gogo-website.git
cd chinese-gogo-website

# 修改文件
# ... 在编辑器中修改 page.js

# 上传修改
git add .
git commit -m "更新课程内容"
git push

# Vercel 自动部署
```

---

## 常见修改示例

### 修改课程价格
在 `page.js` 中找到：
```javascript
{ name: 'Individual Course', price: '$35', desc: 'Single HSK level course' },
```
改为：
```javascript
{ name: 'Individual Course', price: '$40', desc: 'Single HSK level course' },
```

### 修改统计数据
找到：
```javascript
<div className="text-4xl font-bold text-red-600 mb-2">10K+</div>
```
改为：
```javascript
<div className="text-4xl font-bold text-red-600 mb-2">你的数字</div>
```

### 修改课程描述
找到 Free Courses 部分：
```javascript
{ title: 'Introduction to Chinese', desc: '...' }
```
改为你的描述。

### 更改颜色主题
搜索 `red-600` 替换为其他颜色代码：
- `blue-600` (蓝色)
- `green-600` (绿色)
- `purple-600` (紫色)
等等

---

## 后续步骤

### 立即可做：
- [ ] 添加你的品牌 Logo 照片
- [ ] 更新所有课程描述
- [ ] 修改统计数据
- [ ] 检查所有链接正确

### 1周内可做：
- [ ] 设置邮件订阅（Mailchimp）
- [ ] 更新社交媒体链接
- [ ] 添加真实课程封面图片

### 1个月内可做：
- [ ] 集成支付系统（Stripe/Gumroad）
- [ ] 创建学生登录系统
- [ ] 发布第一个免费课程视频

---

## 常见问题

**Q: 我没有技术背景，能做吗?**
A: 完全可以。只需跟着指南一步步操作。

**Q: 修改后什么时候能看到?**
A: 修改后 2-3 分钟自动部署，刷新页面即可看到。

**Q: 能免费部署吗?**
A: 可以！Vercel 对初创项目完全免费。

**Q: 能用自己的域名吗?**
A: 可以。Vercel 完全支持自定义域名。

**Q: 之后如何添加支付功能?**
A: 可以集成 Stripe、Gumroad 或 Teachable。

**Q: 网站速度快吗?**
A: 非常快。Vercel 在全球各地有 CDN，自动优化。

---

## 获得帮助

- Vercel 文档：https://vercel.com/docs
- Next.js 文档：https://nextjs.org/docs
- 提交 Issue：在你的 GitHub 仓库中

---

## 现在就开始！

1. ✅ 注册 GitHub
2. ✅ 创建仓库
3. ✅ 上传文件
4. ✅ 连接 Vercel
5. ✅ 一键部署

**你的网站在线了！** 🎉

现在可以在 Facebook 和小红书 分享这个链接，开始吸引用户了。

---

**祝 Chinese GoGo 成功！** 🚀
