<script lang="ts">
</script>

<header>
	<div class="title">
		<h1><a href="/">Gusti's Website</a></h1>
	</div>
	<nav>
		<ul>
			<li><a href="/">Data Visulisations</a></li>
			<li><a href="/article">Articles</a></li>
			<li><a href="/">Dev Logs</a></li>
			<li><a href="/">Projects</a></li>
			<li><a href="/">Music Ratings</a></li>
		</ul>
	</nav>
</header>

<hr />

<style>
	header {
		margin-top: 1rem;
		margin-bottom: 1rem;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	ul {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 1rem;
		list-style-type: none;
	}

	li {
		position: relative;
		padding: 0.5rem;
		border-left: 0.02rem var(--text-secondary) solid;
		border-right: 0.02rem var(--text-secondary) solid;
		text-underline-offset: 0.1rem;
		transition: text-underline-offset 0.2s ease-in-out;
	}

	li:hover {
		text-decoration: underline;
		text-underline-offset: 0.3rem;
	}

    h1 {
        font-size: 4rem;
    }

	hr {
		font-size: 4rem;
		height: 0.2rem;
		background-color: var(--text-primary);
		margin-left: 5%;
		margin-right: 5%;
	}
</style>
