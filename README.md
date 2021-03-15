node-red-contrib-newsapi
================

Node-RED node for newsapi



## Install

To install the stable version use the `Menu - Manage palette - Install`
option and search for node-red-contrib-newsapi, or run the following
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-newsapi

### wapper newapi
- https://www.npmjs.com/package/newsapi

## Example

#### parameters

```javascript
msg = {};
msg.api = 'topHeadlines'; // everything, sources
msg.queries = {
  q: 'trump',
  category: 'politics',
  language: 'en',
  country: 'us'
}

msg.api = 'everything'
msg.queries = {
    q: 'trump',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk,techcrunch.com',
    from: '2017-12-01',
    to: '2017-12-12',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
}

msg.api = 'sources'
msg.queries = {
    category: 'technology',
    language: 'en',
    country: 'us'
}

return msg;
```

#### results
```json
{
  "status": "ok",
  "totalResults": 1,
  "articles": [
    {
      "source": {
        "id": "the-hill",
        "name": "The Hill"
      },
      "author": "Dominick Mastrangelo",
      "title": "Washington Post adds lengthy correction to report on Trump call with Georgia elections investigator | TheHill - The Hill",
      "description": "The Washington Post has added a lengthy correction to a bombshell report from early Jan...",
      "url": "https://thehill.com/homenews/media/543271-wapost-adds-lengthy-correction-to-story-on-trump-georgia-call",
      "urlToImage": "https://thehill.com/sites/default/files/trumpdonald_raffenspergerbrad_010420getty_split.jpg",
      "publishedAt": "2021-03-15T19:40:56Z",
      "content": "The Washington Post has added a lengthy correction to a bombshell report from early January that had said then-President TrumpDonald TrumpThe Hill's Morning Report - Presented by Facebook - Biden to … [+2353 chars]"
    }
  ]
}

```
