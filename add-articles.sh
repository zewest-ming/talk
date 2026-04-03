#!/bin/bash
cd /home/user/talk
/opt/node22/bin/claude --print "在 healthkids/lib/data.ts 中新增2篇高质量英文儿童健康文章，选择还没有的主题（参考现有Article结构），然后 git add healthkids/lib/data.ts && git commit -m 'Add 2 scheduled articles' && git push origin main" 2>&1
