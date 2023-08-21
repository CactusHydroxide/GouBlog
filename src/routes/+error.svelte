<script>
	import { page } from '$app/stores';

	$: err = { code: $page.status, message: $page.error?.message };
	console.log($page);
</script>

<h1>Error {err.code}</h1>
<p>{err.message} 🤡</p>
<p>Time to head back <a href="/" style="color: aqua; text-decoration: none; ">home</a>!</p>

<!-- custom error message for different error issues? maybe -->
