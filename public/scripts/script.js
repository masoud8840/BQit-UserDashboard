// const { createApp } = Vue
// createApp({
//   data() {
//     return {
//       message: 'Hello Vue!',
//       referralTreeDiagram: [
//         {
//           title: "Admin - Code: 51463212 - TRX",
//           childs: [
//             {
//               title: "Admin - Code: 15202 - TRX"
//             },
//             {
//               title: "Admin - Code: 15202 - TRX"
//             }
//           ]
//         },
//         {
//           title: "Admin - Code: 12314443 - TRX",
//           childs: [
//             {
//               title: "Admin - Code: 15202 - TRX"
//             },
//             {
//               title: "Admin - Code: 15202 - TRX"
//             }
//           ]
//         }
//       ]
//     }
//   }
// }).mount('.container')


const referralDiagramTree = [
  {
    title: "",
    children: [
      {
        title: "Admin - Code: 15202 - TRX",
      }
    ]
  },
  {
    title: "Admin - Code: 15202 - TRX",
  },
]




const template = `<ul class="w-fit space-y-[5px]">
<li
    class="dropdown border-navigation__text border rounded-10px flex items-center p-10px hover:bg-[#393939]/5 cursor-pointer">
    <img src="/public/images/icon/tree_diagram/Arrow_Right.svg" alt="arrow-img"
        class="arrow__img">
    <img src="/public/images/icon/tree_diagram/User_Icon.svg" alt="user-img"
        class="user__icon mx-1">
    <p>Admin - Code: 15202 - TRX</p>
</li>
</ul>`
const tree = document.querySelectorAll('.tree-diagram__tree li');

