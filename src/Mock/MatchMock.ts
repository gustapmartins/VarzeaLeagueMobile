export interface IMatchMock {
    id: Number,
    homeTeam: {
        img: string, 
        goals: number
    },
    visitingTeam: {
        img: string,
        goals: number
    },
  }


export const MatchMock: IMatchMock[] = [
    {
        id: 1,
        homeTeam: {
            img: "https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_96x96.png",
            goals: 0
        },

        visitingTeam: {
            img: "https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_96x96.png",
            goals: 0
        }
    },

    {
        id: 2,
        homeTeam: {
            img: "https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_96x96.png",
            goals: 0
        },

        visitingTeam: {
            img: "https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_96x96.png",
            goals: 0
        }
    },

    {
        id: 3,
        homeTeam: {
            img: "https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_96x96.png",
            goals: 0
        },

        visitingTeam: {
            img: "https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_96x96.png",
            goals: 0
        }
    }
]
