define('docs/renderers/Cards.md', function(require, exports, module) {

  module.exports = {
    "html": "<h1><a class=\"anchor\" name=\"cards\" href=\"#cards\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Cards</h1><p>卡片集合。</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>string</code></td>\n<td></td>\n<td><code>&quot;cards&quot;</code> 指定为卡片集合。</td>\n</tr>\n<tr>\n<td>title</td>\n<td><code>string</code></td>\n<td></td>\n<td>标题</td>\n</tr>\n<tr>\n<td>source</td>\n<td><code>string</code></td>\n<td><code>${items}</code></td>\n<td>数据源, 绑定当前环境变量</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>string</td>\n<td>‘暂无数据’</td>\n<td>当没数据的时候的文字提示</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 CSS 类名</td>\n</tr>\n<tr>\n<td>headerClassName</td>\n<td><code>string</code></td>\n<td><code>amis-grid-header</code></td>\n<td>顶部外层 CSS 类名</td>\n</tr>\n<tr>\n<td>footerClassName</td>\n<td><code>string</code></td>\n<td><code>amis-grid-footer</code></td>\n<td>底部外层 CSS 类名</td>\n</tr>\n<tr>\n<td>itemClassName</td>\n<td><code>string</code></td>\n<td><code>col-sm-4 col-md-3</code></td>\n<td>卡片 CSS 类名</td>\n</tr>\n<tr>\n<td>card</td>\n<td><a href=\"#/docs/renderers/Card\">Card</a></td>\n<td></td>\n<td>配置卡片信息</td>\n</tr>\n</tbody>\n</table>\n<div class=\"amis-preview\" style=\"height: 650px\"><script type=\"text/schema\" height=\"650\" scope=\"body\">{\n    \"type\": \"service\",\n    \"api\": \"https://houtai.baidu.com/api/sample?perPage=8\",\n    \"body\": [\n        {\n            \"type\": \"panel\",\n            \"title\": \"简单 Cards 示例\",\n            \"body\": {\n                \"type\": \"cards\",\n                \"source\": \"$rows\",\n                \"card\": {\n                  \"body\": [\n                    {\n                      \"label\": \"Engine\",\n                      \"name\": \"engine\"\n                    },\n\n                    {\n                      \"name\": \"version\",\n                      \"label\": \"Version\"\n                    }\n                  ],\n\n                  \"actions\": [\n                    {\n                      \"type\": \"button\",\n                      \"level\": \"link\",\n                      \"icon\": \"fa fa-eye\",\n                      \"actionType\": \"dialog\",\n                      \"dialog\": {\n                        \"title\": \"查看详情\",\n                        \"body\": {\n                          \"type\": \"form\",\n                          \"controls\": [\n                            {\n                              \"label\": \"Engine\",\n                              \"name\": \"engine\",\n                              \"type\": \"static\"\n                            },\n\n                            {\n                                \"name\": \"version\",\n                                \"label\": \"Version\",\n                                \"type\": \"static\"\n                            }\n                          ]\n                        }\n                      }\n                    }\n                  ]\n                }\n            }\n        }\n    ]\n}\n</script></div>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Cards",
          "fragment": "cards",
          "fullPath": "#cards",
          "level": 1
        }
      ],
      "level": 0
    }
  };

});
