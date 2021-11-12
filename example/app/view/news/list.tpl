<html>
    <head>
        <title>Hello</title> 
        <link rel="stylesheet" href="/public/css/news.css"></link>   
    </head>
    <body>
        <ul class="news-view">
            {% for item in list %}
            <li>
                <span>{{item.url}}</span>
                <span>{{item.title}}</span>
            </li>
            {% endfor %}
        </ul>
    </body>
</html>