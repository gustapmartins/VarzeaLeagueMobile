type RootStackParamList = {
    ControlPainel: { name: string };
    RegisterMatch: { name: string };
    RegisterPlayer: { name: string };
    RegisterTeam: { name: string };
    Home: { name: string };
};

interface IButtonNavigation {
    LabelButton: string;
    IconName: string;
    RouteName: keyof RootStackParamList;
}

export const ButtonNavigationMock: IButtonNavigation[] = [
    
    {
        LabelButton: "Cadastrar partida",
        IconName: "soccer-field",
        RouteName: "RegisterMatch",
    },
    {
        LabelButton: "Cadastrar jogadores",
        IconName: "account-plus",
        RouteName: "RegisterPlayer",
    },
    {
        LabelButton: "Cadastrar time",
        IconName: "account-group",
        RouteName: "RegisterTeam",
    },

    {
        LabelButton: "Mais informações sobre",
        IconName: "information-outline",
        RouteName: "Home",
    },
];
