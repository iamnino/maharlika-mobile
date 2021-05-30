import { header } from '../helpers/http.helper';

const EventServices = {
    create: async (params: any) => {
        return header.post('/event/create', params);
    },
    filter: async (params: any) => {
        return header.get(`/event/filter?id=${params.userId}&token=${params.token}&type=${params.type}`);
    },
    action: async (params: any) => {
        return header.post('/event/action', params); // Join or Leave
    },
}

export default EventServices;