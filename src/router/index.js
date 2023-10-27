import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Jx3",
      component: () => import("@/views/Main.vue"),
    },
    {
      path: "/test",
      component: () => import("@/views/Test.vue"),
    },
    {
      path: "/role",
      component: () => import("@/views/Account.vue"),
    },
    {
      path: "/add",
      component: () => import("@/views/AddRole.vue"),
    }

  ],
});

// router.beforeEach((to) => {
//   if (to.meta.needLogin) {
//     console.info("來自路由守衛: 本頁面需登入");
//     //登入辨別位置
//     const API_URL = `/routerVerify`;
//     const routerVerify = async () => {
//       let resData = await tutorlink.post(API_URL);
//       if (
//         resData.data === "loginAgain" ||
//         resData.data === "伺服器已重啟，請重新登入"
//       ) {
//         router.replace({ name: "Home" });
//       } else if (resData.data === "relogin") {
//         router.replace({ name: "Home" });
//       }
//       console.log(resData.data);
//     };
//     routerVerify();
//     return;
//   }
//   console.info("來自路由守衛: 本頁面不需登入");
// });

export default router;
