function Profile() {
  return (
    <div class="bg-white w-220 px-10">
      <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <img
          class="w-32 h-32 rounded-full mx-auto"
          src="https://picsum.photos/200"
          alt="Profile picture"
        />
        <h2 class="text-center  text-subscribe-purple text-2xl font-semibold mt-3">
          John Doe
        </h2>
        <p class="text-center text-writing-dark mt-1">Software Engineer</p>
        <div class="flex justify-center mt-5">
          <a
            href="#"
            class="text-dark-purple hover:text-medium-purple-hover mx-3"
          >
            Twitter
          </a>
          <a
            href="#"
            class="text-dark-purple hover:text-medium-purple-hover mx-3"
          >
            LinkedIn
          </a>
          <a
            href="#"
            class="text-dark-purple hover:text-medium-purple-hover mx-3"
          >
            GitHub
          </a>
        </div>
        <div class="mt-5">
          <h3 class="text-xl font-semibold">Bio</h3>
          <p class="text-writing-dark mt-2">
            John is a software engineer with over 10 years of experience in
            developing web and mobile applications. He is skilled in JavaScript,
            React, and Node.js.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
// 'medium-purple-hover': '#D2CCFB',
//         'medium-purple': '#796BD4',
//         'medium-purple-hover': '#754DA2',
//         'subscribe-purple':'#401C6F',
//         'dark-purple': '#53389E',
//         'writing-dark':'#0A033C',
