    /**
     * TODO 1.
     * Buat array of object users (5 users).
     * Object memiliki property: name, age, major.
     * Note: Ubah var menggunakan JavaScript Modern.
     */
    const user1 = {
        name : 'fadjar',
        age : 15,
        major : 'informatics',
    }
    const user2 = {
        name : 'bayu',
        age : 18,
        major : 'developers',
    }
    const user3 = {
        name : 'hijri',
        age : 23,
        major : 'developers',
    }
    const user4 = {
        name : 'ridho',
        age : 24,
        major : 'designer',
    }
    const user5 = {
        name : 'dandi',
        age : 19,
        major : 'data analyst',
    }
    const allUsers = {user1, user2, user3, user4, user5}
    console.log(allUsers);


    /**
     * TODO 2
     * Buat function all: Menampilkan semua data user.
     * Hint: Gunakan for/for-of.
     * Note: Ubah function menggunakan arrow function.
     */
    function all() {
        for(let user = 1; 1 < allUsers.length; user++);
        console.log(`getting all user ${user}`);
    }

    /**
     * TODO 3
     * Buat function store: Menambahkan user baru.
     * Hint: Gunakan method push.
     * Note: Ubah function menggunakan arrow function.
     */
    function store(user) {}

    /**
     * TODO 4.
     * Buat function update: Mengedit data user.
     * Hint: re-assign array.
     * Note: Ubah function menggunakan arrow function.
     */
    function update(index, user) {}

    /**
     * TODO 5.
     * Buat function destroy: Menghapus data user.
     * Hint: Gunakan method splice.
     * Note: Ubah function menggunakan arrow function.
     */
    function destroy(index) {}

    /**
     * Function main.
     * Jangan edit atau hapus function main.
     * Function ini untuk testing task.
     */

    const main = () => {
    /**
     * Test function index
     */
    console.log("Get all user");
    all();

    /**
     * Test function store
     */
    console.log("# Add New User: Sabiq");
    const newUser = {
        name: "Sabiq",
        age: 20,
        major: "Informatics",
    };
    store(newUser);

    /**
     * Test function update
     */
    console.log("# Edit User: Isfa");
    const editedIndex = 1;
    const editedUser = {
        name: "Isfhani Ghiyath",
        age: 23,
        major: "English",
    };
    update(editedIndex, editedUser);

    /**
     * Test function destroy
     */
    console.log("# Delete User: Nurul");
    const deletedIndex = 2;
    destroy(deletedIndex);
    };

    main();

    /**
     * Jangan hapus exports.
     * Exports ini untuk tujuan testing.
     */
    module.exports = { users, all, store, update, destroy };