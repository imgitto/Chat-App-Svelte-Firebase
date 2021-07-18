<script>
	import {auth,googleProvider} from "./firebase";
	import {authState} from "rxfire/auth";

	import Chatroom from "./Chatroom.svelte";

	let user;

	const unsubscribe = authState(auth).subscribe(usr => user = usr);

	function login(){
		auth.signInWithPopup(googleProvider);
	}

	function logout(){
		auth.signOut();
	}
</script>

<style>
	main {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 100%;
		height: 100%;
		max-width: 400px;
		max-height: 500px;
		background: #fff;
		border: 1px solid #eee;
		box-shadow: 0px 5px 10px rgba(0,0,0,0.05);
	}
	.login-form {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);	
	}
	.login-form button {
		padding: 10px;
		background: #fff;
		color: #111;
		font-size: 16px;
		cursor: pointer;
		outline: none;
		border: 1px solid #bbb;
	}
	.login-form button i.fa {
		padding-right: 10px;
		border-right: 1px solid #ddd;
		color: #555;
	}
</style>

<main>
	{#if user}
		<Chatroom user={user} logout={logout}/>
	{:else}
		<div class="login-form">
			<button on:click={login}>
				<i class="fa fa-google"></i>
				Sign In with Google
			</button>
		</div>
	{/if}
</main>
