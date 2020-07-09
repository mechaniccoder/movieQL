const nicolas = {
    name: "sh",
    age: 27,
    gender: "male",
};

const resolvers = {
    Query: {
        person: () => nicolas,
    },
};

export default resolvers;
