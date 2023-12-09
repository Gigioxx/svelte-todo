<script lang="ts">
	let todo = '';

	import { addTodo } from '../stores/todoStore';

	const handleSubmit = () => {
		addTodo(todo);
		todo = '';
		console.log('submitting');
	};
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col text-sm mb-2">
		<label class="font-bold mb-2 text-grey-800" for="todo">Todo</label>
		<input
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
			type="text"
			bind:value={todo}
			name="todo"
			placeholder="What do you want to do?"
		/>
	</div>
	<button
		class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
		type="submit">Submit</button
	>
</form>
