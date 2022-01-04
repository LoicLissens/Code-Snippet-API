Create TABLE categories(
    ID SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE, bg_color VARCHAR(50),
    text_color VARCHAR(240));
    


Create TABLE snippets(
        ID SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) UNIQUE NOT NULL,
    description VARCHAR(250)NOT NULL,
    created_at TIMESTAMP NOT NULL,
    firebase_path VARCHAR(250) NOT NULL,
    code VARCHAR(250),
    backup_path VARCHAR(250)
 );
 
 CREATE TABLE categories_snippets (
    "id" serial NOT NULL PRIMARY KEY,
    "snippet_id" integer NOT NULL REFERENCES "snippets" ("id") DEFERRABLE INITIALLY DEFERRED,
    "categorie_id" integer NOT NULL REFERENCES "categories" ("id") DEFERRABLE INITIALLY DEFERRED);
 
 
 INSERT INTO categories (name, bg_color, text_color)  VALUES ('Javascript', '#f7df1e','#000000');
 
  INSERT INTO categories (name, bg_color, text_color)  VALUES ('Python', '#ffdf91','#eaac7f');
  
  INSERT INTO snippets (name, description ,created_at, firebase_path) VALUES ('Serveur','Launch a serveur in JS', NOW(),'wwww.lol.com') RETURNING id;

INSERT INTO categories_snippets (snippet_id, categorie_id) VALUES (1,1),(1,2);
 
