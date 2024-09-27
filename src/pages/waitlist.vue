<template>
  <div class="waitlist-page">
    <h1>Join Our Waitlist</h1>
    <form @submit.prevent="submitWaitlist">
      <label for="email">Email:</label>
      <input v-model="email" type="email" id="email" required />

      <label for="name">Name:</label>
      <input v-model="name" type="text" id="name" />

      <label for="phone">Phone:</label>
      <input v-model="phone" type="text" id="phone" />

      <button type="submit">Join Waitlist</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      phone: "",
    };
  },
  methods: {
    async submitWaitlist() {
      const waitlist = "cm1jwce7800021ixb7aibkzaz"; // Replace with your waitlist ID
      const email = this.email;
      const name = this.name || ""; // Optional
      const phone = this.phone || ""; // Optional
      const referredBy = ""; // Optional, add logic if needed
      const metadata = {}; // Optional, add metadata if needed

      try {
        const response = await fetch(
          "https://www.waitlist.email/api/subscribers/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              waitlist,
              email,
              name,
              phone,
              referredBy,
              metadata,
            }),
          }
        );

        const body = await response.json();

        if (!response.ok) {
          throw new Error(body.message);
        }

        alert("You have been subscribed!");
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    },
  },
};
</script>

<style scoped>
.waitlist-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
