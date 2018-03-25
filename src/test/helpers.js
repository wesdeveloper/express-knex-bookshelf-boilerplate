import supertest from 'supertest';
import chai from 'chai';
import shell from 'shelljs';
import server from '../../server';

process.env.NODE_ENV = 'test';

global.server = server;
global.request = supertest(server);
global.assert = chai.assert;
global.expect = chai.expect;
global.shell = shell;
