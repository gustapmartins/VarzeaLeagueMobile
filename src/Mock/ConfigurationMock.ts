export interface IConfiguration {
    id: Number,
    title: string,
    iconName: string
  }


export const ConfigurationMock: IConfiguration[] = [
    {
        id: 1,
        title: 'Perfil',
        iconName: 'person-outline'  
    },

    {
        id: 2,
        title: 'Informação dos times',
        iconName: 'people-outline'  
    },

    {
        id: 3,
        title: 'Configurações de Login',
        iconName: 'key-outline'  
    },
]
