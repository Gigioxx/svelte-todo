<script lang="ts">
	import TodoInfo from '../components/TodoInfo.svelte';
	import TodoForm from '../components/TodoForm.svelte';
	import { todos } from '../stores/todoStore';
</script>

<main>
	<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">My Todos</h1>
	<TodoForm />

	{#each $todos as todo}
		<TodoInfo {todo} index={todo.id} />
	{/each}
</main>
