"""
	Front-end for the mixomaxos web-app

"""

# imports ---------------------------------------------------------------------
import webapp2
import jinja2
import os

TEMPLATE_DIR = os.path.join(os.path.dirname(__file__), 'templates')
jinja_environment = \
    jinja2.Environment(loader=jinja2.FileSystemLoader(TEMPLATE_DIR))


# main page -------------------------------------------------------------------
class MainPage(webapp2.RequestHandler):
	"""
	 Handler
	"""
	def get(self):
		# render using the template
		template_values = {}
		template = jinja_environment.get_template('main.html')
		self.response.out.write(template.render(template_values))
