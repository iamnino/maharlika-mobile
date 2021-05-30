import { header } from '../helpers/http.helper';

const EventServices = {
    create: async (params: any) => {
        return header.post('/event/create', params);
    },
    filter: async (params: any) => {
        return header.get(`/event/filter?id=${params.userId}&token=${params.token}&type=${params.type}`);
    },
    host: async (params: any) => {
        return header.get(`/event/my?id=${params.userId}&token=${params.token}&type=${params.type}`);
    },
    action: async (params: any) => {
        return header.post('/event/action', params); // Join or Leave
    },
    status: async (params: any) => {
        return header.post('/event/status', params);
    },
    participant: async (params: any) => {
        return header.post('/event/participant', params);
    },
}

export default EventServices;