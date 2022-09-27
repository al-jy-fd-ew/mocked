-- This file inserts test users & associations
-- Good for testing, but will be replaced with actual username/hashed pw

INSERT INTO public.users ("username", "password") VALUES ('coder1', 'password');
INSERT INTO public.users ("username", "password") VALUES ('coder2', 'password');
INSERT INTO public.users ("username", "password") VALUES ('coder3', 'password');

INSERT INTO public.users_algorithms VALUES (1, 1);
INSERT INTO public.users_algorithms VALUES (1, 4);
INSERT INTO public.users_algorithms VALUES (3, 2);
INSERT INTO public.users_algorithms VALUES (2, 7);

INSERT INTO public.users_design_questions VALUES (3, 1);
INSERT INTO public.users_design_questions VALUES (1, 5);
INSERT INTO public.users_design_questions VALUES (3, 7);
INSERT INTO public.users_design_questions VALUES (2, 8);

INSERT INTO public.users_behavioral_questions VALUES (1, 2);
INSERT INTO public.users_behavioral_questions VALUES (2, 1);
INSERT INTO public.users_behavioral_questions VALUES (2, 5);
INSERT INTO public.users_behavioral_questions VALUES (3, 6);
