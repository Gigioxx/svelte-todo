<script lang="ts">
	import { deleteTodo, toggleCompletedTodo } from '../stores/todoStore';
	import type { Todo } from '../interfaces/Todo.interfaces';
	export let todo: Todo;
	export let index: number;
</script>

<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4">
	<input
		name="completed"
		type="checkbox"
		checked={todo.completed}
		on:change={() => toggleCompletedTodo(todo.id)}
		class="mr-2 form-checkbox h-5 w-5"
	/>

	<span class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>

	<button
		class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
		type="button"
		on:click={() => deleteTodo(todo.id)}>Delete</button
	>
</li>
