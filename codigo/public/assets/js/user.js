export async function createUser({ name, email, password }) {
  const users = await getAllUsers();

  if (!users) {
    alert("Erro interno do servidor, tente novamente");
    return;
  }

  const emailAlreadyInUse = !users.every((user) => user.email !== email);

  if (emailAlreadyInUse) {
    alert("Esse email já está cadastrado");
    return;
  }

  const res = await fetch("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  if (!res.ok) {
    console.error("Erro ao criar usuário");

    return null;
  }

  const newUser = await res.json();

  return newUser;
}

export async function getAllUsers() {
  const res = await fetch("/users");

  if (!res.ok) {
    console.error("Erro ao carregar os usuários");
    return null;
  }

  const users = await res.json();

  return users;
}

export async function getUserById(userId) {
  const res = await fetch(`/users/${userId}`);

  if (!res.ok) {
    console.error("Erro ao carregar os usuários");

    return null;
  }
  const users = await res.json();

  return users;
}

export async function updateUserById(userId, { name }) {
  const res = await fetch(`/users/${userId}`, {
    method: "PATCH",
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    console.error("Erro ao atualizar o usuário");

    return null;
  }

  const updatedUser = await res.json();

  return updatedUser;
}

export async function deleteUserById() {}
