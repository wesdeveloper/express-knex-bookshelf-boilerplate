select pg_terminate_backend(pid) from pg_stat_activity where datname='db_production';
DROP DATABASE db_production;
CREATE DATABASE db_production;
