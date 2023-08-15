const Framework = () => {
  return (
    <div class="flex items-center justify-center min-h-screen">
      <div class="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div class="opacity-60 text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio dolores error iure, perferendis sequi totam. Ad
                aliquam aperiam atque deleniti dolor dolorem enim esse et in,
                inventore itaque, pariatur reprehenderit.
              </div>
            </div>
          </div>
        </div>
        <img
          alt=""
          class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 relative "
          src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
      "
        />
        <div class=" text-white font-bold absolute bottom-28 left-4">
          Jessie Watsica
        </div>
      </div>
    </div>
  );
};

export default Framework;
