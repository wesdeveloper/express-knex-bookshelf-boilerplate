import supertest from 'supertest';
import chai from 'chai';
import shell from 'shelljs';
import app from '../app';

process.env.NODE_ENV = 'test';

global.app = app;
global.request = supertest(server);
global.assert = chai.assert;
global.expect = chai.expect;
global.shell = shell;
