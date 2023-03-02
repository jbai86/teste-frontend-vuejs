import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/home",
    alias: "/",
    name: "home",
    component: () => import("../components/layout/Home")
  },
  {
    path: "/cliente",
    name: "cliente",
    component: () => import("../components/views/cliente/ListarCliente")
  },
  {
    path: "/cliente/adicionar",
    name: "adicionar-cliente",
    component: () => import("../components/views/cliente/RegistrarCliente")
  },
  {
    path: "/produto",
    name: "produto",
    component: () => import("../components/views/produto/ListarProduto")
  },
  {
    path: "/produto/adicionar",
    name: "adicionar-produto",
    component: () => import("../components/views/produto/RegistrarProduto")
  },
  {
    path: "/associar-produto",
    name: "associar-produto",
    component: () => import("../components/views/AssociarProduto")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;