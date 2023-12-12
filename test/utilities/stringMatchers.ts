import * as os from "os";
import {expect} from '@jest/globals';
import type {MatcherFunction} from 'expect';

const ayantPourDernièreLigneNonVide: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, attendu: unknown) {
        if(typeof actual !== 'string') throw new Error("Only works with strings");
        if(typeof attendu !== 'string') throw new Error("Only works with strings");

        const lignesNonVides = actual
            .split(os.EOL)
            .filter(line => line != "");

        const dernièreLigne = lignesNonVides[lignesNonVides.length - 1];

        const pass = dernièreLigne == attendu;
        const message = pass
            ? `La dernière ligne ne devrait pas être ${attendu}, ${actual} obtenu`
            : `La dernière ligne devrait être ${attendu}, ${actual} obtenu`;

        return {
            message: () => message,
            pass: pass
        }
    };

const ayantPourPremièreLigne: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, attendu: unknown) {
        if(typeof actual !== 'string') throw new Error("Only works with strings");
        if(typeof attendu !== 'string') throw new Error("Only works with strings");

        const lignes = actual.split(os.EOL);
        const dernièreLigne = lignes[0];

        const pass = dernièreLigne == attendu;
        const message = pass
            ? `La première ligne ne devrait pas être ${attendu}, ${actual} obtenu`
            : `La première ligne devrait être ${attendu}, ${actual} obtenu`;

        return {
            message: () => message,
            pass: pass
        }
    };

expect.extend({
    ayantPourDernièreLigne: ayantPourDernièreLigneNonVide,
    ayantPourPremièreLigne,
});