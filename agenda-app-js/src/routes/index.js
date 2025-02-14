import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import MeusServicos from "../pages/Servico";
import CadastrarServico from "../pages/Servico/CadastrarServico";
import EditarServico from "../pages/Servico/EditarServico";
import MinhaAgenda from "../pages/Servico/MinhaAgenda";
import MeusAgendamentos from "../pages/Agendamento";
import AgendarServico from "../pages/Agendamento/AgendarServico";
import EditarAgendamento from "../pages/Agendamento/EditarAgendamento";

const AgendappRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/meus-servicos">
                    <Route index element={<MeusServicos />} />
                    <Route path="editar-servico" element={<EditarServico />} />
                    <Route path="cadastrar-servico" element={<CadastrarServico />} />
                    <Route path="minha-agenda" element={<MinhaAgenda />} />
                </Route>
                <Route path="/meus-agendamentos">
                    <Route index element={<MeusAgendamentos />} />
                    <Route path="agendar-servico" element={<AgendarServico />} />
                    <Route path="editar-agendamento" element={<EditarAgendamento />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AgendappRoutes;