<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React</title>

    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>
<body class="int_white_bg hd-white">
    <script>
        window.Laravel = {
            apiUrl: "{{ env('APP_URL') }}"
        };
    </script>
    <div id="app"></div>

</body>
</html>
