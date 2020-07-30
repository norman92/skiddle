import axios from "axios";
import SkiddleEvent from "../types/SkiddleEvent";
import SkiddleResponse from "../types/SkiddleResponse";
import { SkiddleArtist } from "../types/SkiddleArtist";
import toastr from 'toastr';
import 'toastr/build/toastr.css';

const apiKey = "008f1e6099ecc48e990e3776784d447b";

export async function getEvents(keyword: string) {
    try {
        const { data } = await axios.get<SkiddleResponse<SkiddleEvent[]>>(
            `https://www.skiddle.com/api/v1/events/search?keyword=${keyword}&api_key=${apiKey}`
        );
        return data.results;
    } catch (error) {
        handleAPIError(error);
        return [];
    }
}

export async function getEvent(id: string) {
    try {
        const { data } = await axios.get<SkiddleResponse<SkiddleEvent>>(
            `https://www.skiddle.com/api/v1/events/${encodeURI(
                id
            )}?api_key=${apiKey}`
        );
        return data.results;
    } catch (error) {
        handleAPIError(error);
        return null;
    }
}

export async function getArtist(id: string) {
    try {

        const { data } = await axios.get<SkiddleResponse<SkiddleArtist>>(
            `https://www.skiddle.com/api/v1/artist/${id}?api_key=${apiKey}`
        );
        return data.results;
    } catch (error) {
        handleAPIError(error);
        return null;
    }
}

function handleAPIError(error: any) {
    console.error(error);
    toastr.error('An error occurred', 'Sorry, we could not load any data. Please try again.');
}