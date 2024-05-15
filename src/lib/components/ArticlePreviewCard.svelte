<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div>
    <div>
        <h2>{title}</h2>
    </div>
    <p>{description}</p>
</div>

<style>
p {
    color: var(--text-secondary);
}
</style>
