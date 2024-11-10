import prisma from "../../db/db";

type IUser = {
  name: string;
  lastName: string;
  email: string;
};

export const createUser = async (newUser: IUser) => {
  const user = await prisma.user.create({
    data: {
      name: newUser.name,
      lastName: newUser.lastName,
      email: newUser.email,
    },
  });
};

export const getUserById = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};
