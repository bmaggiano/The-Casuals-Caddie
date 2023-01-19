import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            clubs {
                    _id
                    clubId
                    clubName
                    clubAverage
                    clubHigh
                    clubLow
                    dateTested
                }
        }
    }
`

export const QUERY_CLUBS = gql`
    {
        clubs {
            _id
            clubId
            clubName
            clubAverage
            clubHigh
            clubLow
            dateTested
        }
    }
`