import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/",
    name: "home",
    component: () => import("../components/layout/Home")
  },
  {
    path: "/cliente/",
    name: "cliente",
    component: () => import("../components/views/cliente/ListarCliente")
  },
  {
    path: "/cliente/adicionar",
    name: "adicionar-cliente",
    component: () => import("../components/views/cliente/RegistrarCliente")
  },
  {
    path: "/produto/",
    name: "produto",
    component: () => import("../components/views/produto/ListarProduto")
  },
  {
    path: "/produto/adicionar",
    name: "adicionar-produto",
    component: () => import("../components/views/produto/RegistrarProduto")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;