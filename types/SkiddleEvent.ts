import { SkiddleArtistShort } from './SkiddleArtist';
import SkiddleVenue from './SkiddleVenue';

type SkiddleEvent = {
    id: string,
    EventCode: string,
    eventname: string,
    description: string,
    largeimageurl: string,
    startdate: string,
    entryprice: string,
    artists: SkiddleArtistShort[],
    venue: SkiddleVenue
}

export default SkiddleEvent;
