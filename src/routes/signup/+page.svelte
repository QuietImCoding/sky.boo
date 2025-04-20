<script lang="ts">
  import Ghostie from "$lib/Ghostie.svelte";
  import {
    AtpAgent,
    type AtpSessionEvent,
    type AtpSessionData,
  } from "@atproto/api";

  // configure connection to the server, without account authentication
  const agent = new AtpAgent({
    service: "https://pds.sky.boo",
    persistSession: (evt: AtpSessionEvent, sess?: AtpSessionData) => {
      // store the session-data for reuse
    },
  });

  let email = $state("");
  let username = $state("");
  let password = $state("");
  let confirm = $state("");
  let invite = $state("");

  let signupStatus = $state({
    success: false, 
    did: ""
  })
  // Change the agent state to an authenticated state either by:
  async function signUp() {
    await agent.createAccount({
      email: email,
      password: password,
      handle: username + ".pds.sky.boo",
      inviteCode: invite,
    }).then(
        (response) => {
            document.getElementById("status")!.style.visibility = "visible";
            signupStatus.success = response.success; 
            if (response.success) {
                signupStatus.did = response.data.did;
            }
        }
    )
  }
</script>

<p>create your boosky account</p>

<div class="spooky">
  <Ghostie />
  <div class="signup">
    <input
      type="email"
      name="email"
      id="email"
      placeholder="email address"
      bind:value={email}
    />
    <input
      type="text"
      name="username"
      id="username"
      placeholder="pick a username"
      bind:value={username}
    />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="pick a password"
      bind:value={password}
    />
    <input
      type="password"
      name="password"
      id="confirm"
      placeholder="confirm your password"
      bind:value={confirm}
    />
    <input
      type="text"
      name="invite"
      id="invite"
      placeholder="your boosky invite code"
      bind:value={invite}
    />
    <button type="submit" onclick={signUp}>get boo'd up</button>
  </div>
  <Ghostie />
</div>

<div id="status">
    <p>
        {#if signupStatus.success}
            <span class="success">Congratulations!</span>
            <br>
            You have successfully signed up for boosky, your did is {signupStatus.did}
        {/if}
        {#if ! signupStatus.success}
            <span class="failure">Oh no!</span>
            <br>
            Something went wrong with your signup.
        {/if}
    </p>
</div>

<style>
  .spooky {
    display: flex;
    flex-flow: row wrap;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: inset 3px blue;
  }

  .signup {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .signup > input {
    margin: 5px;
  }

  #status {
    visibility: hidden;
    display: flex;
    flex-flow: column;
    text-align: center;
    justify-content: center;
    border: magenta 4px solid;
    padding: 10px;
    margin: 10px;
  }

  .success {
    font-weight: bold;
    color: green;
  }
  
  .failure {
    font-weight: bold;
    color: red;
  }
</style>
